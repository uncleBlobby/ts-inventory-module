decide on database integration
    sqlite3 probably makes more sense than firebase?
    "easier"? free, open source, does not require internet connection

decide if database integration requires express server api integration
    can you connect directly to sqlite3 from vite/react front end?

add fields to sku items:
    uuid for unique identification
    created at and modified at fields
    minimum quantity on hand trigger

add all inventory items to database once db integration and table display are complete

figure out how to integrate inventory module with bottling log module
    bottling log entries need to track components used and subtract them from inventory db


table to show inventory transactions, not just inventory values
    require separate table tracking history of inventory changes???