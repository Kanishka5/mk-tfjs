# Play MK.js with TensorFlow.js

Source code for my article ["Playing Mortal Kombat with TensorFlow.js. Transfer learning and data augmentation"](https://blog.mgechev.com/2018/10/20/transfer-learning-tensorflow-js-data-augmentation/).

You can find the post [here](https://blog.mgechev.com/2018/10/20/transfer-learning-tensorflow-js-data-augmentation/) and MK.js [here](https://github.com/mgechev/mk.js).

## Usage

To try the demo run the following commands:

```bash
npm i && npm i -g serve
cd model && serve -s .
cd mk/server
npm install
node server.js
```

Keep in mind that the model is trained with a small dataset. If it doesn't perform well for you, feel free to follow the instructions from the [blog post](https://blog.mgechev.com/2018/10/20/transfer-learning-tensorflow-js-data-augmentation/) and improve its accuracy.

## License

MIT
