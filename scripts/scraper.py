from recipe_scrapers import scrape_me
import sys

#scraper = scrape_me(sys.argv[1])

scraper = scrape_me("https://www.allrecipes.com/recipe/158968/spinach-and-feta-turkey-burgers/")


print(scraper.ingredients())
sys.stdout.flush()