using System.Security.Claims;
using GameApi.AppServices.Leaderboards.Commands;
using GameApi.AppServices.Leaderboards.Queries;
using GameApi.Domain.Game;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GameApi.Controllers;

[Authorize]
[ApiController]
[Route("leaderboards/[controller]")]
public class LeaderboardController : ControllerBase
{
    private readonly IMediator _mediator;

    public LeaderboardController(IMediator mediator)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> GetLeaderboard()
    {
        var res = await _mediator.Send(new GetLeaderboardQuery());
        return Ok(res.ToString());
    }

    [HttpPost]
    public async Task<IActionResult> CreateLeaderboardEntry(LeaderboardEntry leaderboardEntry)
    {
        if (!Int32.TryParse(User.FindFirstValue(ClaimTypes.NameIdentifier), out var userId))
            return BadRequest("Bad userId");

        leaderboardEntry.UserId = userId;

        var res = await _mediator.Send(new CreateLeaderboardEntryCommand(leaderboardEntry));
        return Ok(res.ToString());
    }
}