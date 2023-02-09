namespace MonoFlic.Models
{
    public class Episode
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string EpisodeURL { get; set; }
        public string Description { get; set; }
        public TimeSpan Duration { get; set; }
    }
}
