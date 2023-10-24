npm --prefix ./user-api/ run serve &
python3 ./api-proxy/api-proxy.py
pipenv run python3 api-proxy.py runserver