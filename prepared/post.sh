#!/bin/bash

# Ask which post to post
printf "Enter the post number of the post to move or \"next\" to auto select the next post: "
read post_number

# Check if that post exists
if [ $post_number="next" ]
then
    for i in prepared/*.md
    do
        post_number=$(basename "$i" .md)
        break # We only want the first one, so break after the first iteration
    done
else
    if [ ! -f prepared/$post_number.md ]
    then
        printf "That post does not appear to exist\n"
        exit
    fi
fi

# Ask for post date (allow for appending current date)
printf "Enter the date for post $post_number in year-month-day (EG: 2015-6-20) format or \"today\" if posting today's post today: "
read post_date

if [ $post_date="today" ]
then
    post_date=$(date +%Y-%-m-%-d)
fi

# Move post file and image to proper folders
mv prepared/$post_number.md ../_posts/$post_date-$post_number.md
mv prepared/$post_number.png ../images/posts/$post_number.png

# Remind the user to post the post
printf "Don't forget to commit and push the new post to GitHub!\n"
