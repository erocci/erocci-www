#!/bin/sh

set -e

rsync --exclude=push.sh --exclude=.git --exclude=.gitignore \
      -av ./ forge.ow2.org:/var/lib/gforge/chroot/home/groups/erocci/htdocs/

echo "You can now push website on production server from admin page of the project..."
