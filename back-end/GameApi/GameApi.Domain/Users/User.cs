namespace GameApi.Domain.Users;

public class User
{
    public int UserId { get; set; }

    public string Username { get; set; } = default!;

    // The password should be hashed with SHA256
    // This IS still dangerous, we'll to tell students not use their passwords for other sites.
    public string Password { get; set; } = default!;

    public string Email { get; set; } = default!;
}