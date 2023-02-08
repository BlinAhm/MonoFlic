using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using MonoFlic.Data;
using MonoFlic.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options =>
{
    options.AddPolicy("default", policy =>
    {
        policy.WithOrigins("https://localhost:44437", "https://localhost:7116").AllowAnyMethod().AllowAnyHeader();
    });
});

var connectionString = builder.Configuration.GetConnectionString("Default");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));
builder.Services.AddDbContext<StreamServerContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("StreamServer")));

builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = false)
    .AddEntityFrameworkStores<ApplicationDbContext>();

builder.Services.AddIdentityServer()
    .AddApiAuthorization<ApplicationUser, ApplicationDbContext>();

builder.Services.AddAuthentication()
    .AddIdentityServerJwt().AddPolicyScheme("ApplicationDefinedAuthentication", null, options =>
    {
        options.ForwardDefaultSelector = (context) =>
        {
            if (context.Request.Path.StartsWithSegments(new PathString("/Identity"), StringComparison.OrdinalIgnoreCase) ||
                context.Request.Path.StartsWithSegments(new PathString("/Api"), StringComparison.OrdinalIgnoreCase))
                return IdentityConstants.ApplicationScheme;
            else
                return IdentityServerJwtConstants.IdentityServerJwtBearerScheme;
        };
    });
builder.Services.Configure<AuthenticationOptions>(options => options.DefaultScheme = "ApplicationDefinedAuthentication");

builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseCors("default");
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();
app.UseIdentityServer();
app.UseAuthorization();

app.MapDefaultControllerRoute().RequireCors("default");
/*app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");*/
app.MapRazorPages();

app.MapFallbackToFile("index.html"); ;

app.Run();
