# Oli's website


```
brew services start postgresql

source .env

python app.py
```



#### debug postgresql problems
```
(oli) ➜  tunnel-season-one git:(master) ✗ brew services stop postgresql


Stopping `postgresql`... (might take a while)
==> Successfully stopped `postgresql` (label: homebrew.mxcl.postgresql)

(oli) ➜  tunnel-season-one git:(master) ✗ pg_ctl -D /usr/local/var/postgres start
pg_ctl: another server might be running; trying to start server anyway
waiting for server to start....2021-05-06 01:25:16.862 MDT [9831] FATAL:  lock file "postmaster.pid" already exists
2021-05-06 01:25:16.862 MDT [9831] HINT:  Is another postmaster (PID 489) running in data directory "/usr/local/var/postgres"?
 stopped waiting
pg_ctl: could not start server
Examine the log output.
(oli) ➜  tunnel-season-one git:(master) ✗ kill 489
(oli) ➜  tunnel-season-one git:(master) ✗ pg_ctl -D /usr/local/var/postgres start
(oli) ➜  tunnel-season-one git:(master) ✗ brew services start postgresql


(oli) ➜  tunnel-season-one git:(master) ✗ psql
psql (13.1)
Type "help" for help.

```
