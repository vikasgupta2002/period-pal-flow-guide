import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Pause, RepeatIcon, Heart, Volume2, Upload } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

interface AudioCategory {
  id: string;
  name: string;
  emoji: string;
  tracks: AudioTrack[];
}

interface AudioTrack {
  id: string;
  title: string;
  src: string;
  description: string;
}

const CrampReliefAudio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('breathwork');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<AudioTrack | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const createBucketIfNotExists = async () => {
      try {
        const { data, error } = await supabase.storage.getBucket('audio-tracks');
        if (error && error.message.includes('does not exist')) {
          const { error: createError } = await supabase.storage.createBucket('audio-tracks', {
            public: true,
          });
          if (createError) throw createError;
          console.log('Created audio-tracks bucket');
        }
      } catch (error) {
        console.error('Error with storage bucket:', error);
      }
    };

    createBucketIfNotExists();
  }, []);

  const audioCategories: AudioCategory[] = [
    {
      id: 'breathwork',
      name: 'Gentle Breathing',
      emoji: '🧘',
      tracks: [
        {
          id: 'breath1',
          title: 'Deep Breathing Exercise',
          src: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_91f91c6324.mp3?filename=relaxing-mountains-rivers-streams-running-water-18178.mp3',
          description: 'Breathe in for 4, hold for 4, out for 6. This pattern helps reduce cramp tension.'
        },
        {
          id: 'breath2',
          title: 'Calm Breath Visualization',
          src: 'https://cdn.pixabay.com/download/audio/2021/07/24/audio_98e642180f.mp3?filename=meditation-yoga-slow-down-93513.mp3',
          description: 'Visualize a soft golden light with each breath, easing your discomfort.'
        },
        {
          id: 'user-breath1',
          title: 'Fall Sound',
          src: 'https://gofile.io/d/L3jUs7',
          description: 'A soothing autumn melody to help you relax and ease cramp tension.'
        }
      ]
    },
    {
      id: 'lofi',
      name: 'Lo-fi Vibes',
      emoji: '🎶',
      tracks: [
        {
          id: 'lofi1',
          title: 'Cozy Study Beats',
          src: 'https://cdn.pixabay.com/download/audio/2022/05/17/audio_1b1e4dc8d9.mp3?filename=lo-fi-chill-hip-hop-95800.mp3',
          description: 'Soft beats to help you relax while dealing with cramps.'
        },
        {
          id: 'lofi2',
          title: 'Rainy Day Lofi',
          src: 'https://cdn.pixabay.com/download/audio/2023/05/29/audio_ab1d2b678e.mp3?filename=relaxing-lofi-beat-115527.mp3',
          description: 'Gentle piano and rain sounds to ease your mind.'
        }
      ]
    },
    {
      id: 'ocean',
      name: 'Ocean Relax',
      emoji: '🌊',
      tracks: [
        {
          id: 'ocean1',
          title: 'Gentle Waves',
          src: 'https://cdn.pixabay.com/download/audio/2021/09/06/audio_8ca829315d.mp3?filename=ocean-waves-112802.mp3',
          description: 'Soft ocean waves washing away discomfort and tension.'
        },
        {
          id: 'ocean2',
          title: 'Beach Meditation',
          src: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d16504ca74.mp3?filename=ocean-waves-and-seagulls-129571.mp3',
          description: 'Immerse yourself in the peaceful sounds of a quiet beach.'
        }
      ]
    },
    {
      id: 'affirmations',
      name: 'Pep Talks',
      emoji: '💬',
      tracks: [
        {
          id: 'affirm1',
          title: 'Period Power',
          src: 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_270f8efd9e.mp3?filename=soft-piano-100-bpm-60-seconds-9551.mp3',
          description: 'You are powerful. Your body knows what it\'s doing. This moment will pass.'
        },
        {
          id: 'affirm2',
          title: 'Self-Compassion',
          src: 'https://cdn.pixabay.com/download/audio/2022/10/17/audio_f10c3f8ef6.mp3?filename=peaceful-piano-116347.mp3',
          description: 'Be gentle with yourself today. You deserve care and comfort.'
        }
      ]
    },
    {
      id: 'user-uploads',
      name: 'My Collection',
      emoji: '🎵',
      tracks: []
    }
  ];

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const category = audioCategories.find(cat => cat.id === categoryId);
    if (category && category.tracks.length > 0) {
      if (isPlaying) {
        setIsPlaying(false);
        if (audioRef.current) {
          audioRef.current.pause();
        }
      }
      setCurrentTrack(category.tracks[0]);
    }
  };

  const handleTrackSelect = (track: AudioTrack) => {
    if (currentTrack?.id === track.id && isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      setCurrentTrack(track);
      if (audioRef.current) {
        audioRef.current.src = track.src;
        audioRef.current.loop = isLooping;
        audioRef.current.play().catch(err => {
          console.error("Error playing audio:", err);
          toast({
            title: "Playback Error",
            description: "There was an issue playing this track. It may be restricted by the source website.",
            variant: "destructive",
          });
        });
        setIsPlaying(true);
      }
    }
  };

  const togglePlay = () => {
    if (!currentTrack) return;
    
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.play().catch(err => {
          console.error("Error playing audio:", err);
          toast({
            title: "Playback Error",
            description: "There was an issue playing this track. It may be restricted by the source website.",
            variant: "destructive",
          });
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
    if (audioRef.current) {
      audioRef.current.loop = !isLooping;
    }
  };

  const toggleFavorite = (trackId: string) => {
    if (favorites.includes(trackId)) {
      setFavorites(favorites.filter(id => id !== trackId));
    } else {
      setFavorites([...favorites, trackId]);
    }
  };

  const handleAudioError = () => {
    toast({
      title: "Playback Error",
      description: "The audio couldn't be played. The source might be restricted or unavailable.",
      variant: "destructive",
    });
    setIsPlaying(false);
  };

  const currentCategory = audioCategories.find(cat => cat.id === selectedCategory);

  return (
    <section id="cramprelief" className="py-20 bg-peach-light/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
            Cramp Relief Corner
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            A calm space to relax during cramps, period anxiety, or heavy flow days.
          </p>
          <p className="text-gray-600">Choose your calm:</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {audioCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={cn(
                "rounded-full text-sm md:text-base px-4 py-2",
                selectedCategory === category.id
                  ? "bg-lavender-dark text-white hover:bg-lavender"
                  : "border-lavender-dark text-lavender-dark hover:bg-lavender-light"
              )}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {currentCategory?.emoji} {currentCategory?.name}
            </h3>
            
            {currentCategory?.tracks.map((track) => (
              <Card 
                key={track.id} 
                className={cn(
                  "hover:shadow-md transition-shadow cursor-pointer border-2",
                  currentTrack?.id === track.id ? "border-pink-dark" : "border-transparent"
                )}
                onClick={() => handleTrackSelect(track)}
              >
                <CardContent className="p-4 flex justify-between items-center">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{track.title}</h4>
                    <p className="text-sm text-gray-600 line-clamp-1">{track.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "text-gray-500 hover:text-pink-dark",
                      favorites.includes(track.id) && "text-pink-dark"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(track.id);
                    }}
                  >
                    <Heart className={cn(
                      "h-5 w-5",
                      favorites.includes(track.id) && "fill-pink-dark"
                    )} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-white/80 shadow-lg border-none overflow-hidden">
              <CardContent className="p-6">
                {currentTrack ? (
                  <>
                    <div className="flex flex-col items-center justify-center mb-8">
                      <div className="w-full max-w-md h-32 bg-lavender-light/30 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                        <div className="flex items-end justify-center gap-1 h-20 w-56">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div
                              key={i}
                              className={cn(
                                "w-3 rounded-t-md bg-lavender-dark opacity-70",
                                isPlaying 
                                  ? "animate-[sound-wave_1.2s_ease-in-out_infinite]" 
                                  : "h-1"
                              )}
                              style={{ 
                                height: isPlaying ? `${20 + Math.sin(i / 2) * 15}px` : "4px",
                                animationDelay: `${i * 0.1}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-800 mt-2">
                        {currentTrack.title}
                      </h3>
                      <p className="text-gray-600 text-center mt-2 italic">
                        "{currentTrack.description}"
                      </p>
                    </div>

                    <div className="flex justify-center items-center gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className={cn(
                          "rounded-full border-2",
                          isLooping ? "border-pink-dark text-pink-dark" : "text-gray-600"
                        )}
                        onClick={toggleLoop}
                      >
                        <RepeatIcon className="h-5 w-5" />
                      </Button>
                      
                      <Button
                        className="rounded-full bg-pink-dark hover:bg-pink text-white h-14 w-14"
                        onClick={togglePlay}
                      >
                        {isPlaying ? (
                          <Pause className="h-6 w-6" />
                        ) : (
                          <Play className="h-6 w-6 ml-1" />
                        )}
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-2 text-gray-600"
                        onClick={() => toggleFavorite(currentTrack.id)}
                      >
                        <Heart 
                          className={cn(
                            "h-5 w-5",
                            favorites.includes(currentTrack.id) && "fill-pink-dark text-pink-dark"
                          )} 
                        />
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64">
                    <Volume2 className="h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-600">
                      Select a track to start listening
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Find a quiet spot, breathe deeply, and let the sounds help you relax.</p>
              <p className="mt-2">These sounds can help ease tension but aren't a replacement for medical care.</p>
            </div>
          </div>
        </div>
      </div>

      <audio ref={audioRef} className="hidden" onError={handleAudioError} />

      <style>
        {`
        @keyframes sound-wave {
          0%, 100% { height: 4px; }
          50% { height: 28px; }
        }
        `}
      </style>
    </section>
  );
};

export default CrampReliefAudio;
