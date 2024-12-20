npx wrangler kv key list --namespace-id=07c7fc2208674cfd9d0bd4966a09855a > purge1.json
jq -r '[.[] | .name]' purge1.json > purge.json
rm purge1.json
npx wrangler kv bulk delete --namespace-id=07c7fc2208674cfd9d0bd4966a09855a purge.json
rm purge.json
