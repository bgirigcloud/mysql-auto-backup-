#Create a Cloud Storage bucket 
gsutil mb -p [your project id] -l asia gs://[any bucket name]


export PROJECT_ID=kinetic-object-400913
SA_NAME=$(gcloud sql instances describe demo-sql-server --project=$PROJECT_ID --format="value(serviceAccountEmailAddress)")

#Grant write access to the service account

gsutil acl ch -u ${SA_NAME}:W gs://[your bucket name]


#Describe the instance you are importing to:

gcloud sql instances describe INSTANCE_NAME
#Copy the serviceAccountEmailAddress field.
#Use gsutil iam to grant the storage.objectAdmin IAM role to the service account for the bucket.

gsutil iam ch serviceAccount:SERVICE-ACCOUNT:objectAdmin \
gs://BUCKET_NAME
