#!/bin/bash

# Check for .jpg files
image_count=0

for i in *.jpg
do
    ((image_count++))
done

if [ $image_count -eq 0 ]
then
    exit
fi

# Rename images to remove "Strip 0" from the front of the name
for i in *.jpg
do
    printf "."
    mv "$i" $(echo "$i" | cut -c 8-)
done

# Resize images and convert to .png
mogrify -resize 1000 -format png *.jpg

# Remove old .jpg files
for i in *.jpg
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

    echo -e "---\nlayout: post\n---\n\n![strip](/images/posts/"$i" \"$alt_text\")" > $(basename "$i" .png).md
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
