deploy:
	hugo -d docs/

commit:
	git add .
	git commit -m "$(message)"

push:
	git push origin development

all: deploy commit push