#!/bin/bash
kicker -c -e 's3cmd -vfrP --exclude="*swp" --exclude=".git*" sync . s3://stop-it.apps.lmorchard.com/'
