#
# Do this old-style, using a simple Makefile to generate my web site.  This is
# about a simple as it gets people.  Seriously, why do you need more than this?
#

all: public

server: 
	cd hugo && hugo server --buildDrafts -w

public: 
	cd hugo && hugo 

aws: public
	aws s3 sync dist s3://diceblog.greylurk.com --acl public-read

clean: 
	rm -rf dist/*

article:
	cd hugo && hugo new post/${title}.md

.PHONY: server public all aws clean article
