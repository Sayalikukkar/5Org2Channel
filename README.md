# 5Org2Channel

## **Overview**<br>

* I have created a network which includes 5 orgs, 2 channels and 1 orderer, by editing and modifying **test-network** configuration file.

**Pre-requestics**<br>

* Install Samples,Binaries and Docker Images for the fabric v2.0.


## **Environment Setup**<br>


**Editing YAML file**

* As like **test-network/organization/fabric-ca/org2/fabric-ca-server-config.yaml** create another new folder **"fabric-ca-server-config.yaml"** and replace all the org fields with org3, org4 and org5.
 ```bash
   test-network/organizations/fabric-ca/org3/fabric-ca-server-config.yaml
 ```

* create another new file **“crypto-config-org3.yaml”** (create same for org4 and org5).
 ```bash
   test-network-/organizations/cryptogen/crypto-config-org3.yaml
 ```

* Then edit configtx.yaml by adding adding &org3, &org4, &org5 below the &org2.

* On the same file , replace/edit your “Profiles ” with the required configuration.

* In **test-network/docker/docker-compose-ca.yaml** add ca_org3, ca_org4 , ca_org5 .

* In **test-network/docker/docker-compose-couch.yaml** add couchdb2 and peer0.org3.example.com, couchdb3 and peer0.org4.example.com , couchdb4 and peer0.org5.example.com .

* In **test-network/docker/docker-compose-test-net.yaml** add peer0.org3.example.com , peer0.org4.example.com, peer0.org5.example.com.


**Editing shell script file**

* In **registerEnroll.sh **as like createOrg2 add createOrg3, createOrg4, createOrg5 and replace all the Org2 fields to Org3, 4 and 5 .

* In that same file ,add joinChannel 3 and updateAnchorPeers 3.( Same for Org4 and Org5).

* This is final step ,in **deployCC.sh** add 5 in chaincode installation, approve, commit , invoke and query as shown below.


 





