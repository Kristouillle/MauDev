
// @ts-ignore: 'astro:db' is provided by Astro or a project shim
import { defineDb, defineTable, column } from 'astro:db';

const cookieConsent = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    ipConsent: column.boolean(),
    ip: column.text(),
    gaConsent: column.boolean(),
    createAt: column.date()
  }
})

export default defineDb({
  tables: {cookieConsent}
});

