using GameApi.Domain.Game;
using GameApi.Domain.Users;
using MediatR;

namespace GameApi.AppServices.Users.Queries;

public class GetUserQuery : IRequest<User>
{
    public int UserId { get; set; } = default!;

    public GetUserQuery(int userId)
    {
        UserId = userId;
    }
}

public class GetUserHandler : IRequestHandler<GetUserQuery, User>
{
    public Task<User> Handle(GetUserQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}