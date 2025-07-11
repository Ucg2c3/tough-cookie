<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [tough-cookie](./tough-cookie.md) &gt; [CookieJar](./tough-cookie.cookiejar.md) &gt; [getSetCookieStrings](./tough-cookie.cookiejar.getsetcookiestrings_2.md)

## CookieJar.getSetCookieStrings() method

Returns an array of strings suitable for `Set-Cookie` headers. Accepts the same options as `.getCookies()`<!-- -->.

**Signature:**

```typescript
getSetCookieStrings(url: string, options?: GetCookiesOptions): Promise<string[] | undefined>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

url


</td><td>

string


</td><td>

The domain to store the cookie with.


</td></tr>
<tr><td>

options


</td><td>

[GetCookiesOptions](./tough-cookie.getcookiesoptions.md)


</td><td>

_(Optional)_ Configuration settings to use when retrieving the cookies.


</td></tr>
</tbody></table>

**Returns:**

Promise&lt;string\[\] \| undefined&gt;

