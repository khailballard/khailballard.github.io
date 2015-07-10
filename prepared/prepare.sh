#!/bin/bash

# Check for .jpeg files
image_count = 0

for i in *.jpeg
do
    ((image_count++))
done

if [ $image_count -eq 0 ]
then
    exit
fi

# Rename images to remove "Strip " from the front of the name
for i in *.jpeg
do
    printf "."
    mv "$i" $(echo "$i" | sed -e "s/Strip //g")
done

# Resize images and convert to .png
mogrify -resize 1000 -format png *.jpeg

# Remove old .jpeg files
for i in *.jpeg
do
    printf "."
    rm "$i"
done

# Generate post files
printf "\n"

for i in *.png
do
    printf "Enter alt text for strip $(basename "$i" .png): "
    read alt_text

    echo "---\nlayout: post\n---\n\n![strip](/images/posts/"$i" \"$alt_text\")" > $(basename "$i" .png).md
done

# Move image and post file to /archive/prepared
for i in *.png
do
    printf "."
    mv $i prepared/$i
done

for i in *.md
do
    printf "."
    mv $i prepared/$i
done

printf "\n" # End the script properly
