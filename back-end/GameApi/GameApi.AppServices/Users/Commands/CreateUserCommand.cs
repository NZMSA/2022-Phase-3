using GameApi.AppServices.Moves.Commands;
using GameApi.Domain.Game;
using GameApi.Domain.Users;
using MediatR;

namespace GameApi.AppServices.Users.Commands;

public class CreateUserCommand : IRequest
{
    public User User { get; set; } = default!;

    public CreateUserCommand(User user)
    {
        User = user?? throw new ArgumentNullException(nameof(user));
    }
}

public class CreateUserHandler : AsyncRequestHandler<CreateUserCommand>
{
    protected override Task Handle(CreateUserCommand request, CancellationToken cancellationToken)
    {
        // request.GameStep
        throw new NotImplementedException();
    }
}