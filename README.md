# sigma-api
Sigma-api is the most barebones api ever from where you can fetch **italian brainrot** images, it uses a **imgdata.json** to store the iamges list and github pages to host the images and json.

# How to use

```javascript
function getRandomItalianBrainrot() {
      fetch('https://pcdelatara.github.io/sigma-api/imgdata.json')
        .then(res => res.json())
        .then(data => {
          const randomIndex = Math.floor(Math.random() * data.images.length);
          const randomImage = data.images[randomIndex];
          document.getElementById("meme-img").src = randomImage;
        })
        .catch(err => {
          console.error("Failed to load image:", err);
        });
    }
```

**Example:** [Italian Brainrot Picker](https://pcdelatara.github.io/sigma-api)
