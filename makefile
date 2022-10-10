create-machine:
	aws stepfunctions create-state-machine --endpoint http://localhost:8083  --name $(name) --role-arn "arn:aws:iam::012345678901:role/DummyRole" --definition file://stepFunction.json

execute-machine:
	aws stepfunctions start-execution --endpoint http://localhost:8083 --state-machine arn:aws:states:us-east-1:123456789012:stateMachine:$(name) --name $(testName)

describe-execution:	
	aws stepfunctions describe-execution --endpoint http://localhost:8083 --execution-arn arn:aws:states:us-east-1:123456789012:execution:$(name):$(testName)

list-state-machines:
	aws stepfunctions list-state-machines --endpoint http://localhost:8083

update-machine:
	aws stepfunctions update-state-machine --endpoint http://localhost:8083  --name $(name) --role-arn "arn:aws:iam::012345678901:role/DummyRole" --definition file://stepFunction.json