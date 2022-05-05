﻿using GameApi.AppServices.Moves.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace GameApi.Controllers;

[ApiController]
public class GameHistoryController : ControllerBase
{
    private readonly IMediator _mediator;

    public GameHistoryController(IMediator mediator)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }
    
    [HttpGet(Name = "GetMoves")]
    public async Task<IActionResult> Get()
    {
        var res = await _mediator.Send(new GetMoveQuery());
        return Ok(res.ToString());
    }
}