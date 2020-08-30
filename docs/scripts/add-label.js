function(records) {
    for(const record of records) {
        for(const part of record.parts) {
            for(const annotation of part.annotations) {
                if(annotation.key !== 'day label') {
                    continue;
                }
                record.userData.push(annotation);
            }
        }
    }
    return records;
}

