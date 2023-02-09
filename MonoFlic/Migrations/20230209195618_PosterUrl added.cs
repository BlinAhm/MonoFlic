using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MonoFlic.Migrations
{
    public partial class PosterUrladded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PosterURL",
                table: "Series",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PosterURL",
                table: "Movie",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PosterURL",
                table: "Series");

            migrationBuilder.DropColumn(
                name: "PosterURL",
                table: "Movie");
        }
    }
}
