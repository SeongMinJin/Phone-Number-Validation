#! /bin/bash

if [ ! -h /home/frontend/node_modules ]

then
	ln -s /home/node_modules /home/srcs/node_modules
fi

npm run start:dev