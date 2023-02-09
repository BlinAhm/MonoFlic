namespace MonoFlic.Models
{
    public class Series
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string TrailerURL { get; set; }
        public string PosterURL { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public float Rating { get; set; }
        public int EpisodeNumber { get; set; }
        public List<Episode> Episodes { get; set; }

        public Series()
        {
            Episodes = new List<Episode>();
        }
    }
}
