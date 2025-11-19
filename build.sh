#!/bin/bash

LINKS_DIR="links"

# Check if the links directory exists
if [ ! -d "$LINKS_DIR" ]; then
  echo "Error: Directory '$LINKS_DIR' not found in the current working directory."
  exit 1
fi

# Loop through all files in the links directory
for link in "$LINKS_DIR"/*; do
  # Check if the file is a symbolic link
  if [ -L "$link" ]; then
    # Get the target of the symbolic link
    target=$(readlink "$link")

    echo "Copying target '$target' of symbolic link '$link'..."
    # Copy the target to the current location, dereferencing the link
    cp -rL "$link" .
  else
    echo "Warning: '$link' is not a symbolic link. Skipping."
  fi
done

echo "Done."
