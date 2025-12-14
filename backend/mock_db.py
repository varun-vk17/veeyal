import uuid
from datetime import datetime

class MockCollection:
    def __init__(self, name):
        self.name = name
        self.data = {}

    async def insert_one(self, document):
        # Simulate MongoDB insert_one
        _id = str(uuid.uuid4())
        document["_id"] = _id
        self.data[_id] = document
        
        class InsertResult:
            def __init__(self, inserted_id):
                self.inserted_id = inserted_id
        
        return InsertResult(_id)

    async def find_one_and_update(self, filter_query, update_query, return_document=False):
        # Very basic simulation for specific payment use case
        # filter_query: {"razorpay_order_id": ...}
        # update_query: {"$set": {...}}
        
        target_doc = None
        target_id = None

        # 1. Find
        for _id, doc in self.data.items():
            match = True
            for k, v in filter_query.items():
                if doc.get(k) != v:
                    match = False
                    break
            if match:
                target_doc = doc
                target_id = _id
                break
        
        if not target_doc:
            return None

        # 2. Update
        if "$set" in update_query:
            for k, v in update_query["$set"].items():
                target_doc[k] = v
        
        return target_doc

class MockDB:
    def __init__(self):
        self.collections = {}

    def __getitem__(self, name):
        if name not in self.collections:
            self.collections[name] = MockCollection(name)
        return self.collections[name]

    def close(self):
        pass
