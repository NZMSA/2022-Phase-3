using GameApi.AppServices.Users.Commands;
using GameApi.AppServices.Users.Queries;
using GameApi.Domain.Users;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace GameApi.Controllers;

[Authorize]
[ApiController]
[Route("users/[controller]")]
public class UserController : ControllerBase
{
    private readonly IMediator _mediator;
    
    public UserController(IMediator mediator)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [AllowAnonymous]
    [HttpPost]
    public async Task<IActionResult> CreateUser(User user)
    {
        var res = await _mediator.Send(new CreateUserCommand(user));
        return Ok(res.ToString());
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        if (!Int32.TryParse(User.FindFirstValue(ClaimTypes.NameIdentifier), out var userId))
            return BadRequest("Bad userId");
        
        var res = await _mediator.Send(new GetUserQuery(userId));
        return Ok(res.ToString());
    }
}