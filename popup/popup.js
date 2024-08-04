const storageKeyProjectIDs = 'storageKeyProjectIDs';
const htmlKeyProjectID = 'htmlKeyProjectID';
const htmlKeyServiceName = 'htmlKeyServiceName';
const htmlKeyServiceURL = 'htmlKeyServiceURL';
const htmlKeyGoToOptions = 'htmlKeyGoToOptions';

const services = [
    {
        "title": "AI Platform Jobs",
        "url": "https://console.cloud.google.com/ai-platform/jobs"
    },
    {
        "title": "AI Platform Notebooks",
        "url": "https://console.cloud.google.com/ai-platform/notebooks/instances"
    },
    {
        "title": "App Engine",
        "url": "https://console.cloud.google.com/appengine"
    },
    {
        "title": "BigQuery",
        "url": "https://console.cloud.google.com/bigquery"
    },
    {
        "title": "BigQuery Data Transfers",
        "url": "https://console.cloud.google.com/bigquery/transfers"
    },
    {
        "title": "BigQuery Scheduled Queries",
        "url": "https://console.cloud.google.com/bigquery/scheduled-queries"
    },
    {
        "title": "Bigtable",
        "url": "https://console.cloud.google.com/bigtable"
    },
    {
        "title": "Billing",
        "url": "https://console.cloud.google.com/billing"
    },
    {
        "title": "Cloud Build",
        "url": "https://console.cloud.google.com/cloud-build/builds"
    },
    {
        "title": "Cloud Composer",
        "url": "https://console.cloud.google.com/composer/environments"
    },
    {
        "title": "Cloud Functions",
        "url": "https://console.cloud.google.com/functions/list"
    },
    {
        "title": "Cloud Run",
        "url": "https://console.cloud.google.com/run"
    },
    {
        "title": "Cloud Run Jobs",
        "url": "https://console.cloud.google.com/run/jobs"
    },
    {
        "title": "Cloud Scheduler",
        "url": "https://console.cloud.google.com/cloudscheduler"
    },
    {
        "title": "Cloud SQL",
        "url": "https://console.cloud.google.com/sql"
    },
    {
        "title": "Cloud Tasks",
        "url": "https://console.cloud.google.com/cloudtasks"
    },
    {
        "title": "Compute Engine",
        "url": "https://console.cloud.google.com/compute/instances"
    },
    {
        "title": "Console",
        "url": "https://console.cloud.google.com/home/dashboard"
    },
    {
        "title": "Container Registry",
        "url": "https://console.cloud.google.com/gcr"
    },
    {
        "title": "Credentials",
        "url": "https://console.cloud.google.com/apis/credentials"
    },
    {
        "title": "Dataflow",
        "url": "https://console.cloud.google.com/dataflow"
    },
    {
        "title": "Datastore",
        "url": "https://console.cloud.google.com/datastore"
    },
    {
        "title": "Endpoints",
        "url": "https://console.cloud.google.com/endpoints"
    },
    {
        "title": "Error Reporting",
        "url": "https://console.cloud.google.com/errors"
    },
    {
        "title": "Firestore",
        "url": "https://console.cloud.google.com/firestore"
    },
    {
        "title": "IAM & admin",
        "url": "https://console.cloud.google.com/iam-admin/iam/project"
    },
    {
        "title": "Instance Groups",
        "url": "https://console.cloud.google.com/compute/instanceGroups/list"
    },
    {
        "title": "KMS",
        "url": "https://console.cloud.google.com/security/kms"
    },
    {
        "title": "Kubernetes Engine",
        "url": "https://console.cloud.google.com/kubernetes/list"
    },
    {
        "title": "Load Balancing",
        "url": "https://console.cloud.google.com/net-services/loadbalancing/loadBalancers/list"
    },
    {
        "title": "Logs",
        "url": "https://console.cloud.google.com/logs/viewer"
    },
    {
        "title": "Memorystore Redis",
        "url": "https://console.cloud.google.com/memorystore/redis/instances"
    },
    {
        "title": "PubSub",
        "url": "https://console.cloud.google.com/cloudpubsub/topicList"
    },
    {
        "title": "Quotas",
        "url": "https://console.cloud.google.com/iam-admin/quotas"
    },
    {
        "title": "Service Accounts",
        "url": "https://console.cloud.google.com/iam-admin/serviceaccounts"
    },
    {
        "title": "Spanner",
        "url": "https://console.cloud.google.com/spanner/instances"
    },
    {
        "title": "StackDriver",
        "url": "https://console.cloud.google.com/monitoring"
    },
    {
        "title": "StackDriver Legacy",
        "url": "https://app.google.stackdriver.com/"
    },
    {
        "title": "Stackdriver Profiler",
        "url": "https://console.cloud.google.com/profiler/_/cpu"
    },
    {
        "title": "Storage",
        "url": "https://console.cloud.google.com/storage/browser"
    },
    {
        "title": "Task queues Cron",
        "url": "https://console.cloud.google.com/appengine/taskqueues/cron&tab=CRON"
    },
    {
        "title": "Transfer Service Cloud",
        "url": "https://console.cloud.google.com/transfer/cloud"
    },
    {
        "title": "Transfer Service On-Premise",
        "url": "https://console.cloud.google.com/transfer/on-premises/jobs"
    },
    {
        "title": "Cloud DNS",
        "url": "https://console.cloud.google.com/net-services/dns/zones"
    },
    {
        "title": "Secret Manager",
        "url": "https://console.cloud.google.com/security/secret-manager"
    },
    {
        "title": "Artifact Registry",
        "url": "https://console.cloud.google.com/artifacts"
    },
    {
        "title": "Monitoring",
        "url": "https://console.cloud.google.com/monitoring"
    },
    {
        "title": "VPC Networks",
        "url": "https://console.cloud.google.com/networking/networks/list"
    },
    {
        "title": "AlloyDB for PostgreSQL",
        "url": "https://console.cloud.google.com/alloydb/clusters"
    },
    {
        "title": "Trace",
        "url": "https://console.cloud.google.com/traces/overview"
    },
    {
        "title": "Workflows",
        "url": "https://console.cloud.google.com/workflows"
    },
    {
        "title": "Machiene Images",
        "url": "https://console.cloud.google.com/compute/machineImages"
    },
    {
        "title": "Cloud Armor",
        "url": "https://console.cloud.google.com/net-security/securitypolicies/list"
    }
];

function extractServiceURL(url) {
    const regex = /(https:\/\/[^\/?]+\.\w+\/[^\/?]+\/[^\/?]+)(?:$|\/|\?)/;
    const match = url.match(regex);
    const extractedURL = match ? match[1] : null;
    return extractedURL;
}

document.addEventListener("DOMContentLoaded", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const url = new URL(tabs[0].url);
        const projectName = url.searchParams.get('project');
        const serviceURL = tabs[0].url;
        const serviceName = getServiceNameFromURL(serviceURL);
        
        if (projectName) {
            document.getElementById(htmlKeyProjectID).value = projectName;
            document.getElementById(htmlKeyProjectID).select();
        }
        
        if (serviceURL) {
            document.getElementById(htmlKeyServiceURL).value = extractServiceURL(serviceURL);
        }

        if (serviceName) {
            document.getElementById(htmlKeyServiceName).value = serviceName;
        }
    });

    chrome.tabs.query({  currentWindow: true }, function(tabs) {
        const matchingServices = [];

        tabs.forEach(tab => {
            if (tab.url.startsWith("https://console.cloud.google.com")) {
                const matchingService = services.find(service => tab.url.startsWith(service.url));
                if (matchingService) {
                    matchingServices.push({
                        service: matchingService,
                        tab: tab
                    });
                }
            }
        });

        matchingServices.sort((a, b) => {
            const serviceA = a.service.title.toLowerCase();
            const serviceB = b.service.title.toLowerCase();
            if (serviceA < serviceB) {
                return -1;
            }
            if (serviceA > serviceB) {
                return 1;
            }
            return 0;
        });

        const table = document.getElementById("opened_already");
        table.innerHTML = ""; // Clear existing table
        table.createTHead().insertRow().innerHTML = "<th style='text-align: left'>Service</th><th style='text-align: left'>Project</th>";
        matchingServices.forEach(match => {
            const row = table.insertRow();
            const titleCell = row.insertCell(0);
            const titleLink = document.createElement("a");
            titleLink.href = match.tab.url;
            titleLink.textContent = match.service.title;
            titleCell.appendChild(titleLink);
            const projectCell = row.insertCell(1);
            const url = new URL(match.tab.url);
            const projectName = url.searchParams.get('project');
            projectCell.innerHTML = projectName;

            // Add click event listener to switch to the tab
            row.addEventListener('click', function() {
                chrome.tabs.update(match.tab.id, { active: true });
            });
        });
    });

    chrome.storage.local.get(storageKeyProjectIDs, function(result) {
        let projects = result[storageKeyProjectIDs] || [];

        const projectAutoCompleteJS = new autoComplete({
            selector: "#" + htmlKeyProjectID,
            data: {
                src: projects,
            },
            resultItem: {
                highlight: true
            },
            resultsList: {
                tabSelect: true
            },
            events: {
                input: {
                    selection: function handleProjectSelection(event) {
                        const selection = event.detail.selection.value;
                        projectAutoCompleteJS.input.value = selection;
 
                    }
                }
            }
        });

        const serviceAutoCompleteJS = new autoComplete({
            selector: "#" + htmlKeyServiceName,
            data: {
                src: services,
                keys: ["title"]
            },
            resultItem: {
                highlight: true
            },
            events: {
                input: {
                    selection: function handleServiceSelection(event) {
                        const selection = event.detail.selection.value;
                        serviceAutoCompleteJS.input.value = selection['title'];
                        document.getElementById(htmlKeyServiceURL).value = selection['url'];
                    }
                }
            }
        });

        // Remove event listener for Enter key press on the project name input
        document.getElementById(htmlKeyProjectID).removeEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                openServiceURL();
            }
        });

        // Add event listener for Enter key press only on the service name input
        document.getElementById(htmlKeyServiceName).addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                openServiceURL();
            }
        });
    });
});



document.getElementById(htmlKeyGoToOptions).addEventListener('click', function () {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('../option.html'));
    }
});

function getServiceNameFromURL(url) {
    const service = services.find(service => url.startsWith(service.url));
    return service ? service.title : '';
}

function openServiceURL() {
    const projectName = document.getElementById(htmlKeyProjectID).value;
    const serviceURL = document.getElementById(htmlKeyServiceURL).value;
    const url = new URL(serviceURL);
    url.searchParams.set('project', projectName);
    console.log(`Opening URL: ${url.toString()}`);

    chrome.tabs.query({ url: url.origin + '/*' }, function(tabs) {
        const matchingTab = tabs.find(tab => tab.url.startsWith(url.origin) && tab.url.includes(url.searchParams.toString()));
        if (matchingTab) {
            chrome.tabs.update(matchingTab.id, { active: true });
        } else {
            window.open(url.toString(), '_blank');
        }
    });
}
