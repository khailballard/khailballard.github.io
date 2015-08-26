#!/bin/bash

cd /home/jessemillar/khailballard.github.io/prepared # Move into the proper directory

git pull # Get the latest from the repo

for i in prepared/*.md # Nab the next prepared post in line for publication
do
    post_number=$(basename "$i" .md)
    break # We only want the first one, so break after the first iteration (lazy)
done

post_date=$(date +%Y-%-m-%-d) # Set the post date to today

# Move post file and image to proper folders
mv prepared/$post_number.md ../_posts/$post_date-$post_number.md
mv prepared/$post_number.png ../images/posts/$post_number.png

git add -A
git commit -m "Automated post"
git push
