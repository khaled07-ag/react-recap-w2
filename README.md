# React Week 2 Recap

A project to recap on React Router, Axios and React Query.

## API Reference

#### Get all items

```http
  GET /books
```

#### Create a Book

```http
  POST /books
```

| Parameter     | Type     |
| :------------ | :------- |
| `title`       | `string` |
| `description` | `string` |
| `price`       | `string` |
| `image`       | `string` |

### Update A Book

```http
  PUT /books/${id}
```

### Delete A Book

```http
  DELETE /books/${id}
```
