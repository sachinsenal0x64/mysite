+++
title = "Barnum Effect is a Unknown Fork in My Opinion"
description = "Changing the barnum effect point of view using Logics / Computing / Mathematics / Philosophy"
date = 2023-12-30
updated = 2024-01-01
draft = false

[taxonomies]
tags = ["Philosophy"]

[extra]
math = true
math_auto_render = true
keywords = "Philosophy,Mathematics,Barnum Effect,Computing,Logics"
toc = true
series = "Philosophy"
+++

<br>

> **The docs (markdown files yeah its also open source) are [here](https://github.com/sachinsenal0x64/mysite/tree/main/content)  Feel free to send PR's regarding spelling mistakes, incorrect grammar etc.**

<br>

Hey, I hope you all are doing well. So let's begin with the topic. You may have heard about the Forer effect. Also known as the [Barnum Effect](https://en.wikipedia.org/wiki/Barnum_effect). So some people can argue what is wrong with it, so everyone follows the traditional flow, right? I realize most people spread negativity about it when it comes to astrology and personal types. Maybe it's not intentional anyway. I have my own personal opinion about this, but I respect that others may have different views or follow the same exact thing other people say. When I do research about the barnum effect, I realize it's the same thing, say, in astrology reflection as well as in mathematics. Levenshtein Distance So if you are a programmer, you know about this. because it's really useful when it comes to calculating similarity between two or more objects. I will explain more about this later. So I highly want to mention that people think astrology is fake as well as dumb. Yeah, maybe your correct who doesn't know anything about astrology or programming because of this, and also, I doubt you ever believe people exit, so they're never going to pay for the internet, and they buy many digital products for free without paying any cents. The world is big, and we don't know anything. I do not believe in astrology, but you cannot escape from astrological reflection. Also, I am doing research on it as well as learning, so the thing is, astrology is really older than barnum psychological phenomena. And it's a pretty good fork as well as based on astrology, in my personal opinion. So the problem is who spreads negativity about it; according to them, "it's really bad cognitive biases," like people scamming money; it's not related to astrology reputation; it's related to people themselves; the same goes to personality types; and some redditors say "taking advantage of human cognitive biases (confirmation bias, Barnum effect, among others).". If someone judges another person, it's not an astrology problem, and it's not a barnum effect. It's simply a matter of personal opinion and perception. Barnum effect, which we can use for computer programming. The concept is that the matter in here is not necessary to involve humans; maybe it is beneficial to people, like renaming their media files. I created software called [Fixarr](https://github.com/sachinsenal0x64/FIXARR), a free and open-source tool that is basically a media renamer, so I use Levenshtein Distance which works the same as the barnum effect but mathematically. The algorithm uses the input to determine the similarity between strings, so i use python. It's like Python tell to the computer to do this task, so it will make for an accurate renaming process, especially when we deal with TV series renaming. It has the same concept: use the barnum effect, but all goes well at the end of the day. You save a bunch of time using those concepts.

<br>


> **Barnum Effect.**

- There is a natural tendency for people to think that a generic or vague personality description applies specifically to themselves.

<br>

> **Real Positive Impact.** 

- I utilize it programmatically! the [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance) is a algorithm its can be work same as barnum effect. i choose python as my programming language since the algorithm uses it to compare the similarity of several strings (local file names for TV series) with an API to extract the right series titles, year, etc. Thus, the entire procedure involves using Python against the computer to do this operation, which will result in an accurate renaming process especially when dealing with the renaming of TV series. The idea is the same apply the barnum effect but everything works out in the end. By applying those phycology principals, you save a ton of time. so thats what astrology try to teach us. so the only limitation in here is the way you think.


<br>

#### Levenshtein Distance Notation


$$
 \text{lev}(a, b) = \sum_{i=1}^{\max(|a|, |b|)} \delta(a_i \neq b_i)
$$

<br>

> **Code Example :**

```python

# Now, fetch information about episodes for each season

episode_url = f"https://api.themoviedb.org/3/tv/{tv_show_id}/season/{season['season_number']}?api_key={tmdb}"
episode_response = requests.get(episode_url)
episode_data = episode_response.json()
rich.print("Episodes:")

for episode_i in episode_data["episodes"]:
    episode_number = episode_i["episode_number"]
    ep_n = episode_i["name"]
    print(episode_number)

    # Calculate similarity_ratio using levenshtein distance 
    similarity_ratio = fuzz.ratio(str(episode), str(episode_number))

    if similarity_ratio > max_similarity_ratio:
        max_similarity_ratio = similarity_ratio
        episode_name = ep_n
        episode = episode_number

    print(
        "Similarity Ratio:",
        similarity_ratio,
        "BASE_NAME:",
        base_name,
        "API_ONE:",
        episode_name,
    )

    new_file_name = f"{t_name} - S{season['season_number']:02d}E{episode:02d} - {episode_name} ({t_date}){ext}"
    rich.print(new_file_name)

```

You can see its which i use Levenshtein Distance algorithm concept to ( Think like astrological lessons ) . Against computer to do this effect (Two Different String Matching), for example computers act like barnum effected object (which applies specifically to themselves and its all for good ) finally my goal was you to think in different way as well as its not bad thing so thanks have a nice day.
