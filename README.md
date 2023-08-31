# Knowledge base UI

## Environment variables

| Name      | Description                                    | Required                  | Default value        |
|-----------|------------------------------------------------|---------------------------|----------------------|
| `API_URL` | URL kb-api (e.g. http://localhost:8000/api/v1) | Yes                       |                      |


## Development environment

### Initial setup

Install npm packages:

```shell
cd app
npm ci
```

Setup runtime environment variables in `app/.env`:

```
API_URL=http://localhost:8000/api/v1
```

`API_URL` should point to a running instance of the [kb-api](https://github.com/QCDIS/kb-api). For quick testing, consider using `https://search.envri.eu/api/v1`.

### Run development server

```shell
cd app
npm run dev
```


## License

Copyright 2023 University of Amsterdam / LifeWatch ERIC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
