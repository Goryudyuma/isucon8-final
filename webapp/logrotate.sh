#!/bin/bash

set -uex

cd `dirname $0`

cp -f log/kataribe.log log/kataribe.log.old
kataribe -f nginx/kataribe.toml < log/kataribe.log > log/kataribe.txt
> log/kataribe.log
