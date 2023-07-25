commit:
	git add .
	git commit -m "$(message)"

deploy:
	hugo -d docs/

push:
	git push origin development

all: commit deploy push