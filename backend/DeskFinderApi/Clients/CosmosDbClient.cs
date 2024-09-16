using Microsoft.Azure.Cosmos;
using System;
using System.Threading.Tasks;

namespace DeskFinderApi.Clients
{
    public interface ICosmosDbClient
    {
        public Task AddItemAsync<T>(T item);
    }

    public class CosmosDbClient : ICosmosDbClient
    {
        private CosmosClient _cosmosClient;
        private Database _database;
        private Container _container;

        private string ConnectionString = "AccountEndpoint=https://deskfinder-db.documents.azure.com:443/;AccountKey=6TF6Cdw8N4e6aj9To7BY68dPqDE82Nul1jsYX98E3n3Nj6brJq2fTSaFYkrmQ9NViPsUiO8CpJ3RACDbAvd2pg==;";
        private string _databaseId;
        private string _containerId;

        public CosmosDbClient(string db, string container)
        {
            _cosmosClient = new CosmosClient(ConnectionString);
            _databaseId = db;
            _containerId = container;
        }

        public static async Task<CosmosDbClient> CreateCosmosDbClient(string db, string container)
        {
            var cosmosClient = new CosmosDbClient(db, container);
            await cosmosClient.InitializeAsync();
            return cosmosClient;
        }

        public async Task InitializeAsync()
        {
            // Create database if it doesn't exist
            _database = await _cosmosClient.CreateDatabaseIfNotExistsAsync(_databaseId);

            // Create container if it doesn't exist
            _container = await _database.CreateContainerIfNotExistsAsync(_containerId, "/partitionKeyPath");
        }

        // Add an item to the container
        public async Task AddItemAsync<T>(T item)
        {
            try
            {
                await _container.CreateItemAsync(item);
                Console.WriteLine("Item added successfully.");
            }
            catch (CosmosException ex)
            {
                Console.WriteLine($"Error adding item: {ex.Message}");
            }
        }

        // Get an item from the container by id and partition key
        public async Task<T> GetItemAsync<T>(string id, string partitionKey)
        {
            try
            {
                ItemResponse<T> response = await _container.ReadItemAsync<T>(id, new PartitionKey(partitionKey));
                return response.Resource;
            }
            catch (CosmosException ex)
            {
                Console.WriteLine($"Error reading item: {ex.Message}");
                return default;
            }
        }

        // Update an item in the container
        public async Task UpdateItemAsync<T>(string id, T item, string partitionKey)
        {
            try
            {
                await _container.UpsertItemAsync(item, new PartitionKey(partitionKey));
                Console.WriteLine("Item updated successfully.");
            }
            catch (CosmosException ex)
            {
                Console.WriteLine($"Error updating item: {ex.Message}");
            }
        }

        // Delete an item from the container
        public async Task DeleteItemAsync(string id, string partitionKey)
        {
            try
            {
                await _container.DeleteItemAsync<object>(id, new PartitionKey(partitionKey));
                Console.WriteLine("Item deleted successfully.");
            }
            catch (CosmosException ex)
            {
                Console.WriteLine($"Error deleting item: {ex.Message}");
            }
        }
    }
}
