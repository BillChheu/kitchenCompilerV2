from recipe_scrapers import scrape_me
import sys

scraper = scrape_me(sys.argv[1])

#scraper = scrape_me("https://www.bonappetit.com/recipe/buttered-potatoes-with-salted-lemon")


ingredients = scraper.ingredients()
for x in ingredients:
    print(x)
sys.stdout.flush()