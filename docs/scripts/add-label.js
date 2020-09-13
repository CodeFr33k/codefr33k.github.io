function(records) {
    for(const record of records) {
        record.userData.push(new KeyValue(
            'day label',
            record.parts[0].lines[0]
        ));
    }
    return records;
}

