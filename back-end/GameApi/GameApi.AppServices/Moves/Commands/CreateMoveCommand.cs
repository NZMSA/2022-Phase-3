using MediatR;

namespace GameApi.AppServices.Moves.Commands;

public class CreateMoveCommand : IRequest
{
    
}

public class CreateMoveHandler : AsyncRequestHandler<CreateMoveCommand>
{
    protected override Task Handle(CreateMoveCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}