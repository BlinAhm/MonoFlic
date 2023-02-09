namespace MonoFlic.Models
{
    public class Series
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string TrailerURL { get; set; }
        public string Category { get; set; }
        public float Rating { get; set; }
        public int Episodes { get; set; }
        public List<String> EpisodeURL { get; set; }

        public Series()
        {
            EpisodeURL= new List<String>();
        }
    }
}
