#
# Do this old-style, using a simple Makefile to generate my web site.  This is
# about a simple as it gets people.  Seriously, why do you need more than this?
#

all: public

server: 
	hugo server --buildDrafts -w

public: 
	hugo 

aws: public
	aws s3 sync public s3://diceblog.greylurk.com --acl public-read

clean: 
	rm -rf public/*

article:
	hugo new post/${title}.md

.PHONY: server public all aws clean article
