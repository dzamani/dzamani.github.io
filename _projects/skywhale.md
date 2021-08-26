---
name: Sky Whale
date: 01-03-2018
tools: [Unity, Mobile, ARKit, ARCore]
image: /assets/img/thumb_skywhale.jpg
description: Made an AR mode for the children's game Sky Whale
external_url: http://www.nick.com.au/apps/game-shakers-skywhale/
main_video: 7F-xDFTs3q8
overview: |
    Based on the famous **Nickelodeon** show for children, the goal of the 2D game Sky Whale is to catch as many items as possible without falling in the water.
    Going through multiple layers in the sky, with several different objects to collect, the player can gather even more items with higher value further increasing their score.
    Our project was to create an additional **AR mode** using the new (at that time) technology *ARKit* and *ARCore* and integrate it into the existing game.
results: |
    Here are some of the many things I've learned during my time on Sky Whale AR:
    - R&D on ARKit & ARCore
        - Promising technology
        - Some drawbacks like high energy consumption, variable accuracy and stability (great improvements since then)
    - Working on a game from start to end
    - Dealing with medium sized codebase
    - Direct communication with clients
    - Short iterations
special_thanks:
    - name: Valentine Dessertenne
      url: https://www.linkedin.com/in/dessertenne/
    - name: Mathieu Gilbert
      url: https://www.linkedin.com/in/mathieugeng/
    - name: Etienne Babin
      url: https://www.linkedin.com/in/etienne-babin-4a118381/
---

The project had 3 stages: prototyping, integration and shipping.

## Prototyping and making a 3D AR game

**ARKit and ARCore** were new technology, with *less than one year* of existence, there wasn't a lot of documentation nor feedbacks from previous users.
There also were device requirements that had to be met, since Augmented Reality's (AR) stability and performances weren't the same on every device, which increased the complexity of testing.

My goal was to make the best use of ARKit/ARCore's available features so, in collaboration with our game designer, we looked into the **surface detection** feature as a way to place the underwater plane where objects and environment props would be spawned.

After several iterations, we had to acknowledge the fact that *poor environment* (lighting or reflective materials) and *camera position drift*, especially with high speed device movements, were decreasing the experience's quality.
The solution we came up with was to have a default position for the underwater plane (based on the target audience which was mostly children) and a pre-game step to be able to adapt the height to the player. In case we do manage to detect any surface, it would then just add to the experience (making environments props appear where surface was detected). The surface detection feature would not drive the gameplay anymore.

What makes AR interesting is the ability to **sync players real-life movements** into the game, which we used to make Narby (main character of Sky Whale) move around.
Narby would follow where the player was pointing their device, so they had to physically move around in order to bring Narby closer to collectible items. Making Narby go through the ocean would make it dive under and loot other kinds of items like chests for example.
While that solution was fun to play and develop, it brought its own downsides like *mild exhaustion* in the player's arms, from having to keep their device straight, or *bumping into furniture* while moving. This is why we focused on **short play sessions** during race mode a free-roaming mode just to enjoy moving Narby around.

Once I had a basic setup for experimenting on the AR feel, my work was pretty straightforward. After having a satisfying level of quality for that feature, I went to help with finishing up **Game flow, UI, and collectible integration (SFX, VFX, 3D models, data, etc.)**.

## Integration into Sky Whale 2D

Diving into a codebase isn't the easiest task and I would even say that it's often the *main source of complexity* when trying to make get any work done.

How I've handled it at the time was first looking for the *entry point*, where does it all begin? Once found, I start looking for traces of any high-level architecture and flow which would help to understand what are the existing systems and how to deal with them.
Gathering knowledge about the codebase (state machines, scene loading, events handlers, singletons, third-party plugins, etc.), I was a bit more prepared for the next step: **updating Unity**.

Working with ARKit/ARCore came with the necessity of being up to date with Unity to use their AR plugin and updates always come with their share of *risks* which is why you need to know as much as you can about how a project work before any update.
Adding AR mode after the update went fairly well, aside from issues with third-party plugins that we had to update too. I also made it possible to detect devices' capabilities to disable anything related to the mode. *AR was an optional mode* added to the original game and should not affect the player's experience. If your device wasn't able to run AR, you would not see any difference from previous versions of the game.

## Shipping and maintenance

That was it, **everything was working on all our target devices** and was shipped on iOS and Android.
The client's **feedbacks were great**, and we could see a *lot of positive reviews* in the app stores.
After the game was shipped, I worked a few more times for specific timed events (Halloween, Christmas, etc.) where we added/swapped in-game items and UI in both the 2D game and AR mode.