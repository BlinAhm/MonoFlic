﻿namespace MonoFlic.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string MovieURL { get; set; }
        public string TrailerURL { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public float Rating { get; set; }
        public TimeSpan Duration { get; set; } 

    }
}
