using GameApi.Domain.Moves;
using MediatR;

namespace GameApi.AppServices.Moves.Queries;

public class GetMoveQuery : IRequest<MoveType>
{
    
}

public class GetMoveHandler : IRequestHandler<GetMoveQuery, MoveType>
{
    public Task<MoveType> Handle(GetMoveQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}