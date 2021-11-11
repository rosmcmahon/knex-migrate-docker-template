FROM postgres:14

# postgres runs sql & bash files found in this folder on first start.
WORKDIR /docker-entrypoint-initdb.d/

# just create our database if it does not already exist. 

RUN echo "\
SELECT 'CREATE DATABASE $POSTGRES_DB'\n\
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$POSTGRES_DB')\\gexec\
" > init.sql

# N.B. other image bases may require `echo -e` for this method of file creation

# ofc, if you wanted to make it even easier for yourself, you could just create the file using:
# `ADD init.sql /docker-entrypoint-initdb.d/`
# but good luck making env variables work in that external sql file.