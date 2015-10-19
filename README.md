# Flippy

Voice controlled online shopping assitant using Alchemy API and fuzzy search.

## Installation:

1. Install tampermonkey chrome extension.
2. Run build_prod_scripts.sh.
2. Add  dist/userscript.js.script to tampermonkey.
3. Host the project directory at `localhost:8000`.
4. Go to flipkart.com from your browser.

## Usage

* Allow the site microphone access.
* Say "Ok Flipkart" to activate the voice assitant.
* Tell the assitant what product you are looking for.
* Once it searches for the product you can inlude filters by saying include. For example, you can say `include Adidas`.
* Exclude filters by saying `exclude Adidas`.
* View a product in detai lby saying `view`. For example, you can say `view moto x 16 gb`.
* Add the product to cart by saying `add to cart` or `add cart`.

Built for Flipkart Hackday 6, June 2015.

## Contributors

* [Sriram Sundarraj](https://github.com/ssundarraj)
* [Karthik Vijay](https://github.com/CoolVoltage)
* [Gokul Srinivas](https://github.com/GokulSrinivas)
* [Vivek Siva](https://github.com/bindingofisaac)
