using DeskFinderApi.Clients;
using Microsoft.AspNetCore.Mvc;

namespace MyBasicApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HelloWorldController : ControllerBase
    {
        private readonly CosmosDbClient _cosmosDbClient;

        public HelloWorldController(CosmosDbClient cosmosDbClient)
        {
            _cosmosDbClient = cosmosDbClient;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var item = new
            {
                id = "123",
                partitionKey = "pk",
                name = "Updated Item",
                description = "This item has been updated"
            };
            await _cosmosDbClient.AddItemAsync(item);
            return Ok(new { message = "Hello, world!" });
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetItem(string id)
        {
            var item = new
            {
                id = id,
                partitionKey = "pk",
                name = "Updated Item",
                description = "This item has been updated"
            };
            await _cosmosDbClient.AddItemAsync(item);
            return Ok(new { message = $"Hello, world! {id}" });
        }
    }
}
